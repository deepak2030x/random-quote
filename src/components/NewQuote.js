import { useEffect, useState } from "react";

// async function fetchFun() {
//   await fetch("https://api.api-ninjas.com/v1/quotes/", {
//     headers: {
//       "X-Api-Key": "BtGU0Clg9CG2VANFgpd+1A==YXF9MOr7qVHWFLVC",
//     },
//   }).then((res) => {
//     //   console.log(res);
//     res.json().then((obj) => {
//       return obj[0];
//     });
//   });
// }

function NewQuote() {
  const [quote, setQuote] = useState(false);
  const [sndReq, setSendReq] = useState(false);
  //   console.log(quote);

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/quotes/", {
      headers: {
        "X-Api-Key":
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_QUOTE_API_KEY
            : "BtGU0Clg9CG2VANFgpd+1A==YXF9MOr7qVHWFLVC",
      },
    }).then((res) => {
      //   console.log(res);
      res.json().then((obj) => {
        setQuote(obj[0]);
      });
    });
  }, [sndReq]);

  const Loading = <h1>Loading... </h1>;
  return (
    <div
      class="card text-center mb-3"
      style={{ width: `${18}rem`, margin: `${0} auto`, marginTop: `${50}px` }}
    >
      <div id="quote-box" class="card-body">
        <h5 id="text" class="card-title">
          {quote ? quote.quote : Loading}
        </h5>
        <p id="author" class="card-text">
          {quote ? quote.author : ""}
        </p>
        <button
          onClick={() => {
            setSendReq((prev) => !prev);
            setQuote(false);
          }}
          id="new-quote"
          class="btn btn-primary"
          style={{ marginLeft: `${10}px` }}
        >
          New quote
        </button>
        <a
          id="tweet-quote"
          target="_blank"
          class="btn btn-primary"
          style={{ marginRight: `${10}px` }}
          href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

export default NewQuote;

{
  /* <div class="card text-center mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <a href="#" class="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>; */
}
