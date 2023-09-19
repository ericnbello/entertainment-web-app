exports["myfunc"] = runWith({secrets: ["REACT_APP_TMDB_API_KEY"]}).https.onCall(() => {
    process.env.REACT_APP_TMDB_API_KEY
  })  