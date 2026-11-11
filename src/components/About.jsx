function About({
  image = "https://via.placeholder.com/215",
  about,
}) {
  return (
    <aside className="mx-auto my-10 flex max-w-5xl items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <img
        src={image}
        alt="blog logo"
        className="h-20 w-20 rounded-full border-2 border-slate-100 object-cover"
      />

      <p className="text-sm leading-7 text-slate-600">
        {about}
      </p>
    </aside>
  );
}

export default About;