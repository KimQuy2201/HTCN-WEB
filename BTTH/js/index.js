$(document).ready(function(e) {
    var i = 1;
    $("#myBtn").click(function() {
        $("#myModal").modal();
    });
    // Ktra mã tour
    var txtMa = $("#txtID");
    var tbMa = $("#tbID");
    function KiemTraMaTour() {
        var re = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}-\d{4}$/;
        if(txtMa.val() == ""){
            tbMa.html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test(txtMa.val())) {
            tbMa.html("* Mã tour theo mẫu: XXX-XXX-00-0000");
            return false;
        }
        tbMa.html("*");
        return true;
    }
    txtMa.blur(KiemTraMaTour);

    // Ktra điểm đến(hành trình)
    var txtHT = $("#txtHT");
    var tbHT = $("#tbHT");
    function KiemTraDiemDen() {
        if (txtHT.val() == "") {
            tbHT.html("* Bắt buộc nhập");
            return false;
        }
        tbHT.html("*");
        return true;
    }
    txtHT.blur(KiemTraDiemDen);

    // Ktra Ngày khởi hành
    var txtNgay = $("#txtNKH");
    var tbNgay = $("#tbNKH");
    function KiemTraNgayKH() {
        if (txtNgay.val() == "") {
            tbNgay.html("* Bắt buộc nhập");
            return false;
        }
        var day = new Date(txtNgay.val());
        var today = new Date();
        today.setDate(today.getDate() + 30);
        if(day < today){
            tbNgay.html("* Ngày khởi hành phải sau ngày hiện tại 30 ngày");
            return false;
        }
        tbNgay.html("*");
        return true;
    }
    txtNgay.blur(KiemTraNgayKH);

    // Ktra gia tour
    var txtGT = $("#txtGT");
    var tbGT = $("#tbGT");
    function KiemTraGiaTour() {
        if (txtGT.val() == "") {
            tbGT.html("* Bắt buộc nhập");
            return false;
        }
        if(isNaN(txtGT.val())){
            tbGT.html("* Phải nhập số");
            return false;
        }
        if(eval(txtGT.val()) <= 0){
            tbGT.html("* Phải nhập số > 0");
            return false;
        }
        tbGT.html("*");
        return true;
    }
    txtGT.blur(KiemTraGiaTour);

    // Ktra Save
    $("#btnSave").click(function() {
        if (KiemTraMaTour() == true && KiemTraNgayKH() == true && KiemTraDiemDen() == true && KiemTraGiaTour() == true) {
            row = "<tr>";
            row += "<td>" + (i++) + "</td>";
            row += "<td>" + txtMa.val() + "</td>";
            row += "<td>" + $("#txtHT").val() + "</td>";
            row += "<td>" + txtNgay.val() + "</td>";
            row += "<td>" + $("#txtTime").val() + "</td>";
            row += "<td>" + txtGT.val() + "</td>";
            row += "<td>" + $("#txtImg").val() + "</td>";
            row += "<tr>";
            $("#table").append(row);
            $("#myModal").modal("hide");
            return false;
        }
        return false;
    });
});