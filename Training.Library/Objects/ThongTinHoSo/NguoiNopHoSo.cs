using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Training.Library.Objects.ThongTinHoSo
{
    public class NguoiNopHoSo
    {
        public long nguoiNopHoSoId { get; set; }
        public long hoSoTiepNhanId { get; set; }
        public string hoTen { get; set; }
        public bool gioiTinh { get; set; }
        public DateTime? ngaySinh { get; set; }
        public int? namSinh { get; set; }
        public string diaChi { get; set; }
        public int loaiGiayToId { get; set; }
        public string soGiayTo { get; set; }
        public string soDienThoai { get; set; }
        public string email { get; set; }
    }
}
