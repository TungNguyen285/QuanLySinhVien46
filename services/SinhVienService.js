//File Liên kết  với backend
var SinhVienService = function(){
    this.themMoi = function(sinhvien){

    }
    this.xoa = function (maSV){

    }
    this.capNhat = function(sinhVien){

    }
    this.layDanhSachSinhVien = function(){
        return axios({
            url:'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
            method: 'GET',
        })
    }
    this.layThongTinSinhVien = function(){

    }
}