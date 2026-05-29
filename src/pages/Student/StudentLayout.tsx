import { AppLayout } from "../../layout/AppLayout/AppLayout";
 
import { InvitationsPanel } from "../../features/Student/components/InvitationsPanel/InvitationsPanel";
import { EmptyGroupState } from "../../features/Student/components/EmptyGroupState/EmptyGroupState";
import { Sidebar } from "../../layout/Sidebar/Sidebar";

export function StudentLayout() {
    //const { id } = useParams();

  return (
    <AppLayout
      sidebar={<Sidebar />}
      aside={<InvitationsPanel />}
    >
      <EmptyGroupState />
    </AppLayout>
  );
}
