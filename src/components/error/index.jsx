const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <b className="text-lg">Uçuş Verisi Alınamadı</b>
      <p>{message}</p>
    </div>
  );
};

export default Error;
