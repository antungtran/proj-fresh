VModule.define('thongtinhosochitiet', {

    //Hàm chạy khi module được khởi tạo. Thường sử dụng để khai báo các thành phần trong module
    onInit: function (vModule) {
        let that = this;

        this.txtName = vModule.find('#txtName');
    },

    //Hàm khai báo đăng ký sự kiên sử dụng trong module
    listeners: function () {
        this.control({
            'thongtinhosochitiet': {
                changeValue: this.updateView //changeValue: Sự kiện phát sinh khi bến value của module được cập nhật. Sự kiện mặc định bắt buộc phải có của module
            },
            'thongtinhosochitiet #txtName': {
                keyup: this.keyUp_txtName //Sự kiện khi người dùng gõ phím vào input txtName
            }
        });
    },

    updateView: function (vModule) {

        var currentValue = vModule.getValue(); //Lấy giá trị của module ra và cập nhật lại giao diện.


        //Phần code cập nhật giao diện theo value;
        this.txtName.val(currentValue);
    },

    foo: function () {
        //Private function
    },

    bar: function () {
        //Private function
    },

    keyUp_txtName: function (vModule, input, e) {
        //Xử lý sự kiện

        console.log(input.val());
    }
})