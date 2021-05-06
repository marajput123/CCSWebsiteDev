const send_form = (data, successCallback, failureCallback, setLoader) => {
  fetch(
    "https://3pqea5rcri.execute-api.us-east-1.amazonaws.com/development1/send-form",
    {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        subject: data.subject,
        companyName: data.companyName,
        phone: data.phone,
        message: data.message,
        honeyText: data.honeyText,
      }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      setLoader(false);
      if (response.status === 200) {
        successCallback();
      } else {
        failureCallback(response.errors);
      }
    })
    .catch((err) => {
      //Server error callback
      console.log(err);
      setLoader(false);
    });
};

export default send_form;
