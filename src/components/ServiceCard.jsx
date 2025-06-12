const ServiceCard = ({ title, icon }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-indigo-100 group">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-indigo-100 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
