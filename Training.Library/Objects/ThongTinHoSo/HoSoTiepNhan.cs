using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Training.Library.Objects.ThongTinHoSo
{
    public class HoSoTiepNhan
    {
        public long hoSoTiepNhanId { get; set; }
        public int tinhId { get; set; }
        public int huyenId { get; set; }
        public int xaId { get; set; }
        public string maHoSo { get; set; }
        public string soBienNhan { get; set; }
        public string nguoiTiepNhan { get; set; }
        public DateTime? ngayNopHoSo { get; set; }
        public DateTime? ngayTiepNhan { get; set; }
        public DateTime? ngayHenTra { get; set; }
        public string maThuTucHanhChinh { get; set; }
        public string maQuyTrinh { get; set; }

        public int phuongThucNhanThongTin { get; set; }
        public bool daTiepNhan { get; set; }
        public bool huyHoSo { get; set; }
        public bool tuChoiTiepNhan { get; set; }
        public string lyDoTuChoi { get; set; }
        public string userNameNguoiNopDon { get; set; }

        public bool yeuCauBoSungTruocTiepNhan { get; set; }
        public string noiDungCanBoSung { get; set; }

        public int trangThaiXuLy { get; set; }
        public string tenTrangThai { get; set; }

        public bool capMoiGiayChungNhan { get; set; }
        public string ghiChu { get; set; }

        public NguoiNopHoSo NguoiNopHoSo { get; set; }

        public List<HoSoThuaDat> ListThuaDat { get; set; }

        public List<GiayToDinhKem> ListGiayToDinhKem {get;set;}
    }
}
