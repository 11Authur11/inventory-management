"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// Users page displaying a list of users in a data grid
const columns: GridColDef[] = [
  // Define columns for the data grid
  { field: "userId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
  // Fetch users data from API
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    // Show loading state
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !users) {
    // Show error state
    return (
      <div className="text-center text-red-500 py-4">Failed to fetch users</div>
    );
  }

  return (
    // Render users data grid
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Users;
