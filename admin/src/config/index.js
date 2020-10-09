const DEVBASEURL = "http://localhost:8100";

export const API_VERSION = "v1";
export const S3BASEURL ="";


let _BASEURL = "http://localhost:8100";

const current_url = window.location.host;

if(current_url == "localhost:8080"){
    _BASEURL == "http://localhost:8100"

}else if(current_url=="test-dashboard.stone.com"){
    _BASEURL = "test-backend.stone.com";
}else if(current_url="dashboard.stone.com"){
    _BASEURL = "backend.stone.com";
}

export const BASEURL = process.env.NODE_ENV ==="development" ? DEVBASEURL : _BASEURL;
