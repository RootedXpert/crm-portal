const AboutPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: {
      revalidate: 0,
      tags: ["about"],
    },
  });
  const data = await response.json();
  return <p>{data.title}</p>;
};

export default AboutPage;
