interface NumCardProps {
  num: string;
  text: string;
}

const NumCard = ({ num, text }: NumCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <p className="heading-large text-pink">{num}</p>
      <p className="body-large font-bold text-white text-center">{text}</p>
    </div>
  );
};

export default NumCard;
