using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Training.Library.Objects.ThongTinHoSo
{
    public class GiayToDinhKem
    {
        public long giayToDinhKemId { get; set; }
        public string tenGiayTo { get; set; }
        public int soBanChinh { get; set; }
        public int soBanSao { get; set; }
        public long hoSoTiepNhanId { get; set; }
        public object tepTin { get; set; }
        public long yeuCauBoSungHoSoId { get; set; }
    }
}
