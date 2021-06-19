import React, { useEffect } from "react";

function App() {
  // useEffect(() => {
    
  // }, []);

  window.paypal.use(["login"], function (login) {
    const x = login.render({
      appid:
        "AZ1ErjY-8CPnrEMUY8WuIWZwNO-ScKPCXF_tWju9FgCaVWHcP0TWVcxx8OXkl9kcT4mwrU4qbSlf3QZh",
      scopes: "openid",
      authend: "sandbox",
      containerid: "lippButton",
      locale: "ru-ru",
      returnurl: "https://v2.staging-lyfeapps.com/paypalbutton/"
    });
    x.onclick = (e) => console.log(e);
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <span id="lippButton" />
    </div>
  );
}

export default App;
