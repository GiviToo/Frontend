import Link from "next/link";

function Card(props) {
  let status;
  if (props.props.status === "UNASSIGNED") {
    status = (
      <p className="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {props.props.status}
      </p>
    );
  } else if (props.props.status === "ASSIGNED") {
    status = (
      <p className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {props.props.status}
      </p>
    );
  } else if (props.props.status === "IN PROGRESS") {
    status = (
      <p className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {props.props.status}
      </p>
    );
  } else if (props.props.status === "FINISHED") {
    status = (
      <p className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {props.props.status}
      </p>
    );
  } else if (props.props.status === "CANCELED") {
    status = (
      <p className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {props.props.status}
      </p>
    );
  }
  return (
    <Link href={`/browse/${props.props.uuid}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer hover:translate-y-1">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> {props.props.title}</div>
          <p className="text-gray-700 text-ellipsis overflow-hidden h-24">
            {props.props.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.props.category?.name}
          </p>
        </div>
        <div className="px-6">
          <p className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Penyedia : {props.props.owner.name}
          </p>
        </div>
        <div className="px-6 pb-2">
          {status}
        </div>
      </div>
    </Link>
  );
}

export default Card;
