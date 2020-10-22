export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  if (password.length < 8) return false;
  return true;
}

export function selectionFilter({ series, films } = []) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series?.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series?.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series?.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series?.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series?.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      { title: "Drama", data: films?.filter((item) => item.genre === "drama") },
      {
        title: "Thriller",
        data: films?.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Children",
        data: films?.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: films?.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films?.filter((item) => item.genre === "romance"),
      },
    ],
  };
}
