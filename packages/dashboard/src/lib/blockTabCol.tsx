'use client'

import { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Block } from 'viem'

export const blockTabCol: ColumnDef<Block>[] = [
  {
    accessorKey: 'number',
    header: 'Block Number',
  },
  {
    accessorKey: 'miner',
    header: 'Miner',
  },
  {
    accessorKey: 'gasUsed',
    header: 'Gas Used',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const blockNumber = row.original?.number || ''

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(blockNumber?.toString())}
            >
              Copy Block Number
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
