//Tạo dối tượng service tương tác backend
var svService = new
SinhVienService();

var renderSinhVien = function(){
    var promise = svService.layDanhSachSinhVien();
    promise.then(function(res){
        //Tạo <tr> table
        //Tạo nội dung các thẻ tr
        var contentTable = '';
        for(var index = 0; index < res.data.length; index++){
            var sinhVien = res.data[index];
            contentTable += `
                <tr>
                    <td>${sinhVien.MaSV}</td>
                    <td>${sinhVien.HoTen}</td>
                    <td>${sinhVien.Email}</td>
                    <td>${sinhVien.SoDT}</td>
                    <td>${sinhVien.CMND}</td>
                    <td>${sinhVien.DiemToan}</td>
                    <td>${sinhVien.DiemLy}</td>
                    <td>${sinhVien.DiemHoa}</td>
                </tr>`;
        }
        //In ra giao diện
        document.getElementById('tblSinhVien').innerHTML = contentTable;
        //console.log(res.data)
    }).catch(function(error){
        console.log(error.response.data)
    })
}

renderSinhVien();


//user A
var capNhatSinhVien = function( id, sinhVienUpdate){
    console.log('Cậpnhật sinh viên ' + id);
}