using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Training.Library.Objects.Menu;
using Training.Library.Objects.ThongTinHoSo;
using Training.Mocks;

namespace Training.Library.Providers
{
    public class TrainingProvider
    {
        public static List<MenuItem> GetMainMenu()
        {
            return JsonConvert.DeserializeObject<List<MenuItem>>(MocksData.MENU);
        }

        public static HoSoTiepNhan GetHoSoTiepNhan()
        {
            return JsonConvert.DeserializeObject<HoSoTiepNhan>(MocksData.HOSOTIEPNHAN);
        }

        public static ThongKeSoLuongHoSo GetThongKeSoLuongHoSo()
        {
            return JsonConvert.DeserializeObject<ThongKeSoLuongHoSo>(MocksData.THONGKESOLUONGHOSO);
        }
    }
}