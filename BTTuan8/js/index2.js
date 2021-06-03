$(document).ready(function(e){
    var i = 1;
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
    // Kiểm tra mã tour
    function KiemTraMaTour(){
    var re = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}-\d{4}$/;
    if ($("#txtID").val() == ""){
        $("#tbID").html("* Bắt buộc nhập!");
        return false;
    }
    if (!re.test($("#txtID").val())){
        $("#tbID").html("* Nhập mã tour theo mẫu: XXX-XXX-00-0000");
        return false;
    }
    $("#tbID").html("*");
    return true;
    }
    $("#txtID").blur(KiemTraMaTour);
    // Kiểm tra hành trình
    function KiemTraHanhTrinh() {
        if ($("#txtHT").val() == ""){
            $("#tbHT").html("* Bắt buộc nhập!");
            return false;
        }
        $("#tbHT").html("*");
        return true;
    }
    $("#txtHT").blur(KiemTraHanhTrinh);
    //Kiểm tra ngày khởi hành
    function  KiemTraNKH() {
        if ($("#txtNKH").val() == "") {
            $("#tbNKH").html("* Bắt buộc nhập!");
            return false;
        }
        var day = new Date($("#txtNKH").val());
        var today = new Date();
        today.setDate(today.getDate() + 30);
        if (day < today) {
            $("#tbNKH").html("Ngày khởi hành phải sau ngày hiện tại 30 ngày!");
            return false;
        }
        $("#tbNKH").html("*");
        return true;
    }
    $("#txtNKH").blur(KiemTraNKH);
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
    //Kiểm tra save
    $("$txtSave").click(function(){
        if (KiemTraMaTour() == true && KiemTraHanhTrinh() == true && KiemTraNKH() == true && KiemTraGiaTour() == true){
            row = "<tr>";
            row += "<td>" + (i++) + "</td>";
            row += "<td>" + $("#txtID").val() + "</td>";
            row += "<td>" + $("#txtHT").val() + "</td>";
            row += "<td>" + $("#txtNKH").val() + "</td>";
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