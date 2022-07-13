var VModule = {};
VModule.VModuleJsLoader = {};
VModule.VModuleInterface = {};

VModule.define = function (vmoduleName, config) {
    VModule.VModuleJsLoader[vmoduleName] = function (jObj) {
        let vmoduleConfig = $.extend({}, config);
        var vModule = VModule.getVModule(jObj);

        if (!vmoduleConfig) {
            console.error(`VModule ${vmoduleName} not contain onInit function`);
            return false;
        }

        //Kế thừa module nếu có
        if (vmoduleConfig.extend) {
            if (VModule.VModuleInterface[vmoduleConfig.extend]) {
                var interfaceExtend = VModule.VModuleInterface[vmoduleConfig.extend];
                vmoduleConfig = $.extend({}, interfaceExtend, vmoduleConfig);
            }
            else {
                console.error(`VModule Interface not contain ${vmoduleConfig.extend}`)
            }
        }

        if (!vmoduleConfig.onInit) {
            console.error(`VModule ${vmoduleName} not contain onInit function`);
            return false;
        }

        //Gán biến dom vào để chứa đối tượng 
        vmoduleConfig.element = vModule;

        //Gọi hàm khởi tạo 
        vmoduleConfig.onInit(vModule);

        //Hàm đăng ký sự kiện cho  các đối tượng trong module
        vmoduleConfig.control = function (listeners) {
            for (var strQuery in listeners) {
                var control = null;

                var re = new RegExp(vmoduleName, "g");
                var query = strQuery.replace(re, `[vmodule-id="${vModule.VModuleId}"]`)
                                   .replace(/{{VModuleId}}/g, vModule.VModuleId);

                control = $(query);

                if (control.toArray().length > 0) {
                    $.each(control, function (index, ctrl) {
                        if (ctrl.eventFunc == null) {
                            ctrl.eventFunc = {};
                        }

                        var qrNotSpace = strQuery.split(' ').join('');

                        if (ctrl.eventFunc[qrNotSpace] == null) {
                            ctrl.eventFunc[qrNotSpace] = {};
                        }

                        for (var eventName in listeners[strQuery]) {
                            ctrl.eventFunc[qrNotSpace][eventName] = listeners[strQuery][eventName];
                        }    
                    });

                    var listEvent = [];
                    for (var eventName in listeners[strQuery]) {
                        listEvent.push(eventName);
                    }    
                   
                    if (listEvent.length > 0) {
                        const qr = strQuery.split(' ').join('');
                        control.on(listEvent.join(" "), function (a, b, c, d, e, f, g, h, i, j, k) {
                            if (a.target.eventFunc && a.target.eventFunc[qr] && typeof (a.target.eventFunc[qr][a.type]) === 'function') {
                                var target = $(this);
                                a.target.eventFunc[qr][a.type].apply(vmoduleConfig, [vModule, target, a, b, c, d, e, f, g, h, i, j, k]);
                            }

                            return true;
                        });
                    }
                }
            }
        };

        //Gán các hàm & biến của module vào DOM để tiện truy xuất
        vModule[0].vModuleConfig.Config = vmoduleConfig;

        //Gọi hàm khởi tạo đăng ký sự kiện
        if (typeof (vmoduleConfig.listeners) === "function") {
            vmoduleConfig.listeners();
        };

        //Fire sự kiện sau khi đăng ký xong vmodule
        vModule.trigger('afterrender', vModule);
    };

    $(document.currentScript).on('load', function (e) {
        if (this.parentElement) {
            VModule.VModuleJsLoader[vmoduleName]($(this.parentElement));
        }
    });
};

VModule.getVModule = function (jObject) {
    var vModule = jObject.closest(".VModule");
    if (vModule[0] != null) {
        if (vModule[0].hasInit) {
            return vModule;
        }

        vModule.mode = "add";
        var jsonSettings = vModule.attr('vmodule-settings');
        if (jsonSettings) {
            vModule.Settings = JSON.parse(jsonSettings);
            vModule.removeAttr('vmodule-settings');
        }
        vModule.Id = vModule.attr("id");
        vModule.VModuleId = vModule.attr("vmodule-id");
        vModule.on("initview", function () {
            if (vModule.onChangeData) {
                vModule.onChangeData();
            }
            else {
                vModule.trigger('changeValue'); //Cấu trúc module mới
            }
        });

        vModule.change(function (e) {
            if (e && e.target && $(e.target).hasClass("VModule") && vModule.onChangeData) {
                vModule.onChangeData();
            }

            return false;
        });

        vModule.export = function (obj) {
            if (typeof (obj) !== 'object') return;

            for (let prop in obj) {
                vModule[0][prop] = obj[prop];
            }
        };

        vModule[0].hasInit = true; //Chỉ khởi tạo 1 lần

        vModule[0].vModuleConfig = {
            ServerSettings: jsonSettings ? JSON.parse(jsonSettings) : null,
            Config: {}
        };
    }
    else {
        console.log("vModule not exist", jObject);
    }
    return vModule;
};

 //VModule global function
(function ($) {
    $.fn.setValue = function (value, fireEvent) {
        let jElement = this;
        if (jElement.hasClass('VModule')) {

            jElement[0].value = value;

            if (fireEvent == null) fireEvent = true;
            if (fireEvent) {
                jElement.trigger('changeValue');
            }
        }
    };

    $.fn.getValue = function () {
        let jElement = this;
        if (jElement.hasClass('VModule')) {

            let value = jElement.val();

            if (value === "") {
                value = null;
            }

            //Kiểm tra có hàm override hay không
            if (jElement.vModule() && typeof (jElement.vModule().getValue) === 'function')
            {
                let config = jElement.vModule();
                let instanceOfModule = config.element;

                return jElement.vModule().getValue.apply(config, [instanceOfModule, value]);
            }

            return value;
        }
    };

    $.fn.vModule = function () {
        let jElement = this;
        let excludeFunction = ["onInit", "listeners"];
        if (jElement.hasClass('VModule')) {

            let dom = jElement[0];

            if (dom && dom.vModuleConfig && dom.vModuleConfig.Config) {
                return dom.vModuleConfig.Config;
            }
            
        }

        return false;
        
    };
})(jQuery);