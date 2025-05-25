const Client_say = () => {
  return (
    <>
      <section className="bg-muted dark:bg-background py-16 transition-colors">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mb-12">
            Hear directly from our happy customers.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Anjali Verma",
                role: "Product Manager, TechCorp",
                text: "This platform exceeded our expectations. The support is fast and the UI is intuitive!",
              },
              {
                name: "Ravi Singh",
                role: "Founder, StartX",
                text: "One of the best investments we've made. It helped streamline our entire workflow.",
              },
              {
                name: "Sara Khan",
                role: "Marketing Head, MediaBuzz",
                text: "The analytics and performance insights gave us a huge edge. Highly recommended!",
              },
            ].map((client, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md transition-all duration-300 transform hover:shadow-xl hover:scale-[1.03] hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
              >
                <p className="text-muted-foreground dark:text-gray-300 mb-4 italic">
                  “{client.text}”
                </p>
                <div className="font-semibold text-foreground dark:text-white">
                  {client.name}
                </div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">
                  {client.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Client_say;
