function getCookie(name) {
    var value = `; ${document.cookie}`;
    var parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  function Cookie() {
    var tokenState = useState({});
  
    useEffect(function() {
      var cookie = getCookie("rp_token");
      if (cookie) {
        cookie = JSON.parse(cookie);
        tokenState[1](cookie);
        navigate("/admin");
      }
    }, []);
};