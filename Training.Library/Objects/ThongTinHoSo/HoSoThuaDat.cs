using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Training.Library.Objects.ThongTinHoSo
{
    public class HoSoThuaDat
    {
        public long hoSoThuaDatId { get; set; }
        public long hoSoTiepNhanId { get; set; }
        public string soThuTuThua { get; set; }
        public string soHieuToBanDo { get; set; }
        public int xaId { get; set; }
        public string diaChi { get; set; }
        public double? dienTich { get; set; }
    }
}
