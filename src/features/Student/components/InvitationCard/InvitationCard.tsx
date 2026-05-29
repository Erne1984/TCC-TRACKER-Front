type InvitationCardProps = {
  author: string;
  group: string;
};


export function InvitationCard({author, group}: InvitationCardProps) {
  return (
    <>

    <p>{author} e {group}</p>

    </>
  );
}