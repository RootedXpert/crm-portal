export const Loading = () => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-primary shadow-lg rounded-lg">
      <div className="animate-pulse space-y-4">
        <div className="bg-gray-300 h-6 w-20 rounded"></div>
        <div className="bg-gray-300 h-4 w-24 rounded"></div>
        <div className="bg-gray-300 h-4 w-16 rounded"></div>
        <div className="bg-gray-300 h-4 w-20 rounded"></div>
      </div>
    </div>
  );
};

export default Loading;
