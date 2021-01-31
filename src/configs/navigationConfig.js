import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    type: "groupHeader",
    groupTitle: "MANUAL SYSTEM"
  },
  {
    id: "properties",
    title: "Properties",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    children: [
      {
        id: "allProperties",
        title: "All Properties",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/properties/all"
      },
      {
        id: "leasedProperties",
        title: "Leased Properties",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/properties/leased"
      },
      {
        id: "emptyProperties",
        title: "Empty Properties",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/properties/empty"
      },
      {
        id: "listedProperties",
        title: "Listed Properties",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/ecommerce/checkout"
      }
    ]
  },
  {
    id: "contacts",
    title: "Contracts",
    type: "item",
    icon: <Icon.Book size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/contracts"
  },
  {
    id: "leaseOrders",
    title: "Lease Orders",
    type: "item",
    icon: <Icon.CheckSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/lease-orders"
  },
  {
    id: "customers",
    title: "Customers",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/customers",
    filterBase: "/customers"
  },
  {
    id: "landlords",
    title: "Landlords",
    type: "item",
    icon: <Icon.UserCheck size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/landlords",
    filterBase: "/landlords"
  },
  {
    type: "groupHeader",
    groupTitle: "FINANCIAL MANAGEMENTT"
  },
  {
    id: "invoices",
    title: "Invoices",
    type: "item",
    icon: <Icon.FileText size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/invoices"
  },
  {
    type: "groupHeader",
    groupTitle: "COMMUNICATION"
  },
  {
    id: "messages",
    title: "Messages",
    type: "item",
    icon: <Icon.MessageSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/chat"
  },
  {
    id: "scheduledVisits",
    title: "Scheduled Visits",
    type: "item",
    icon: <Icon.Calendar size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/calendar"
  },
  {
    type: "groupHeader",
    groupTitle: "SYSTEM SETUP"
  },
  {
    id: "countries",
    title: "Countries",
    type: "item",
    icon: <Icon.Map size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/countries"
  },
  {
    id: "cities",
    title: "Cities",
    type: "item",
    icon: <Icon.MapPin size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/cities"
  },
  {
    id: "propertyTypes",
    title: "Property Types",
    type: "item",
    icon: <Icon.FolderPlus size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/property-types"
  },
  {
    id: "invoiceTypes",
    title: "Invoice Types",
    type: "item",
    icon: <Icon.FolderPlus size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/invoice-types"
  },
  {
    id: "settings",
    title: "System Settings",
    type: "item",
    icon: <Icon.Settings size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/settings"
  },
]

export default navigationConfig
