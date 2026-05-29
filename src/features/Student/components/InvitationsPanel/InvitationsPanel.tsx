import { InvitationCard } from "../InvitationCard/InvitationCard";

export function InvitationsPanel() {
  return (
    <>
      <InvitationCard
        author="Lucas"
        group="Marketing Digital em Pequenas Empresas"
      />

      <InvitationCard
        author="Pedro"
        group="RecycleTech - App de Reciclagem"
      />
    </>
  );
}