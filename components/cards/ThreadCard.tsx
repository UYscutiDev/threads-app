interface Props {
  id: string;
  currenUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string,
    image: string,
    id: string
  };
  community: {
    id: string,
    name: string,
    image: string
  } | null;
  createdAt: string
  comments: {
    author: {
      image: string
    }
  }[];
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currenUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
}: Props) => {
  return (
    <section>
      <h2 className="text-small-regular text-light-2">
        {content}
      </h2>
    </section>
  )
}



export default ThreadCard;