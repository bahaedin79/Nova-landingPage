import { Link } from 'react-router-dom';

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Link to="/" className="flex items-center ">
        <span className="text-heading text-3xl font-nunito font-bold">Nova</span>
      </Link>
      <div className="flex flex-col gap-2 text-default font-roboto text-sm mt-2">
        <span>125 High Street</span>
        <span>Barnet, Hertfordshire</span>
        <span>
          <b>Phone: </b> 020 8440 5737
        </span>
        <span>
          <b>Email:</b> Nova@gmail.com
        </span>
      </div>
    </div>
  );
}
