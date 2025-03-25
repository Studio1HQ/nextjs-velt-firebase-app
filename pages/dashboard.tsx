import React, { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { withAuth } from "@/utils/withAuth";
import {
  useVeltClient,
  useSetDocumentId,
  VeltCommentTool,
  VeltSidebarButton,
  VeltCommentsSidebar,
} from "@veltdev/react";
import { auth } from "../firebase";

const Dashboard = () => {
  const { logout } = useAuth();
  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {
      client.setDocument("unique-document-id", {
        documentName: "Document Name",
      });
    }
  }, [client]);

  useEffect(() => {
    const initVelt = async () => {
      if (client && auth?.currentUser) {
        // Create the Velt user object
        const user = {
          userId: auth?.currentUser?.uid,
          organizationId: "default",
          name: auth?.currentUser?.displayName,
          email: auth?.currentUser?.email,
          photoUrl: auth?.currentUser?.photoURL,
          color: "#babfff",
          textColor: "#434141",
        };

        //4) Pass the user object to the SDK
        await client.identify(user);
      }
    };
    initVelt().catch(console.error);
  }, [client]);

  useSetDocumentId("my-document-id");

  return (
    <div className="content-container">
      <div>
        <h1>Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <div className="flex justify-end">
        <VeltCommentsSidebar pageMode={true} />
        <VeltCommentTool />
        <VeltSidebarButton />
      </div>

      <h2>Article: The Future of Web Development</h2>

      <div id="commentable-paragraph-1" className="commentable-text">
        <p>
          The web development landscape is constantly evolving. New frameworks
          and libraries emerge every year, promising to make development faster
          and more efficient. However, with these advancements comes the
          challenge of keeping up.
        </p>
      </div>

      <div id="commentable-paragraph-2" className="commentable-text">
        <p>
          Collaboration tools have become essential for modern development
          teams. The ability for team members to comment directly on content and
          mention each other streamlines the feedback process and ensures
          nothing falls through the cracks.
        </p>
      </div>
    </div>
  );
};
export default withAuth(Dashboard);
