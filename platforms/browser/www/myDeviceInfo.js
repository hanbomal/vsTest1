function getDeviceInfo(){
    var msgInfo="<p>장치 플랫폼 : "+device.platform +"</p>"
    +"<p>OS버전 : " +device.version+"</p>"
    +"<p>장치 이름 : " +device.name+"</p>"
    +"<p>장치 UUID : " +device.uuid+"</p>"
    +"<p>코르도바 버전  : " +device.Cordova+"</p>"
    +"<p>화면 너비 : " +screen.width+"</p>"
    +"<p>화면 높이 : " +screen.height+"</p>"
    +"<p>색상 깊이 : " +screen.colorDepth+"</p>";
    $("#infoArea").html(msgInfo);
};
function getVibrate(){
    navigator.notification.vibrate(1000);
};
function getCompass(){
    navigator.compass.getCurrentHeading(
        function(heading){
            $("#resultArea").html("<p>방위각 : "+heading.trueHeading+"</p>");
        },
        function(){
            $("resultArea").html("<p>방위각 오류</p>");
        }
    )
};

function getBattery(){
    window.addEventListener("batterystatus", function(info){
        $("#resultArea").html("<p>배터리 잔량:"+info.level+" %</p>");
    },false);
};

function getConnection(){
    var status = navigator.network.connection.type
    $("#resultArea").html("<p>네트워크 연결 상태 : "+status+"</p>");
}

function getLocation(){
    $("#resultArea").html("<p>위치정보 탐색중...</p>");
    navigator.geolocation.getCurrentPosition(
        function(Position){
            $("#resultArea").html("<p>위도 : "+Position.coords.latitude+"</p>"+"<p>경도 : "+ Position.coords.longitude+"</p>");
        },
        function(posError){
            $("resultArea").html("<p>위치정보 오류 : ("+posError.code+")"+posError.message+"</p>");
        },
        {maximumAge:3000,timeout:50000,enableHighAccuracy:true}
    );
};