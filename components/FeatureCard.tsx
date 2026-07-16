type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">

      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-gray-300 mt-4">
        {description}
      </p>

    </div>
  );
}