using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Training.Library.Providers;

namespace proj_fresher.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var menu = TrainingProvider.GetMainMenu();
            var hoSo = TrainingProvider.GetHoSoTiepNhan();
            var thongKeSoLuongHoSo = TrainingProvider.GetThongKeSoLuongHoSo();
            return View();
        }
    }
}