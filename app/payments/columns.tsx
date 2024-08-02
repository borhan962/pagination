"use client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTable } from "./data-table"
import { createContext, useState } from "react"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  name : string
  title: string
}



export const columns: ColumnDef<Payment>[] = [
    {
    id: "select",
    header: ({ table }) => (
      <Checkbox checked={ table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
      
    cell: ({ row }) => (
      <>
        <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"/>  
      </>

    ),
},

  {
  accessorKey: "id",
  header: "id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
  accessorKey: "email",
  header: "Email",
  },
  {
  accessorKey: "name",
  header: "Name",
  },
  {
  accessorKey: "username",
  header: "Username",
  },
  
]



