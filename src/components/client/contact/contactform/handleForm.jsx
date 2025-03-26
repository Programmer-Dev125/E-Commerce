export async function handleForm(contacts, setReceived, setResponse) {
  if (
    !contacts.name ||
    !contacts.email ||
    !contacts.subject ||
    !contacts.message
  )
    return;
  const isText = /^[a-zA-Z0-9 ]{5,15}$/.test(contacts.name);
  const isSubject = /^[a-zA-Z0-9 ]{5,20}$/.test(contacts.subject);
  const isMessage = /^[a-zA-Z0-9 ]{10,40}$/.test(contacts.message);

  if (!isText) {
    setReceived(true);
    setResponse({
      danger: true,
      message: "Name Invalid, should be in between 5 and 15 characters",
    });
    setTimeout(() => {
      setReceived(false);
    }, 1000);
    return;
  }
  if (!isSubject) {
    setReceived(true);
    setResponse({
      danger: true,
      message: "Subject Invalid, should be in between 5 and 20 characters",
    });
    setTimeout(() => {
      setReceived(false);
    }, 1000);
    return;
  }
  if (!isMessage) {
    setReceived(true);
    setResponse({
      danger: true,
      message: "Message Invalid, should be in between 10 and 40 characters",
    });
    setTimeout(() => {
      setReceived(false);
    }, 1000);
    return;
  }
  const isFetch = await fetch(
    "https://e-commerce-gamma-one-65.vercel.app/api/app",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-request-path": "/contact",
      },
      body: JSON.stringify(contacts),
    }
  );
  switch (isFetch.status) {
    case 200:
      {
        const isResp = await isFetch.json();
        setReceived(true);
        setResponse({
          danger: false,
          message: isResp.success,
        });
        setTimeout(() => {
          setReceived(false);
        }, 800);
      }
      break;
    case 400:
      {
        const isResp = await isFetch.json();
        setReceived(true);
        setResponse({
          danger: true,
          message: isResp.error,
        });
        setTimeout(() => {
          setReceived(false);
        }, 800);
      }
      break;
    case 500:
      {
        const isResp = await isFetch.json();
        setReceived(true);
        setResponse({
          danger: true,
          message: isResp.error,
        });
        setTimeout(() => {
          setReceived(false);
        }, 800);
      }
      break;
    default:
      setReceived(true);
      setResponse({
        danger: true,
        message: isResp.error,
      });
      setTimeout(() => {
        setReceived(false);
      }, 800);
      break;
  }
}
