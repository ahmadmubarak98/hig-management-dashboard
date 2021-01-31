import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting
const Home = lazy(() =>
  import("./views/pages/Home")
)

const Page2 = lazy(() =>
  import("./views/pages/Page2")
)

// Properties
const AllProperties = lazy(() => import("./views/pages/properties/all"))
const LeasedProperties = lazy(() => import("./views/pages/properties/leased"))
const EmptyProperties = lazy(() => import("./views/pages/properties/empty"))
const CreateNewProperty = lazy(() => import("./views/pages/properties/create"))
const EditProperty = lazy(() => import("./views/pages/properties/edit"))

// Countries
const AllCountries = lazy(() => import("./views/pages/countries/all"))
const CreateNewCountry = lazy(() => import("./views/pages/countries/create"))
const EditCountry = lazy(() => import("./views/pages/countries/edit"))

// Cities
const AllCities = lazy(() => import("./views/pages/cities/all"))
const CreateNewCity = lazy(() => import("./views/pages/cities/create"))
const EditCity = lazy(() => import("./views/pages/cities/edit"))

// Customers (Tenants)
const AllCustomers = lazy(() => import("./views/pages/customers/all"))
const CreateNewCustomer = lazy(() => import("./views/pages/customers/create"))
const EditCustomer = lazy(() => import("./views/pages/customers/edit"))

// Landlords (Agents)
const AllLandlords = lazy(() => import("./views/pages/landlords/all"))
const CreateNewLandlord = lazy(() => import("./views/pages/landlords/create"))
const EditLandlord = lazy(() => import("./views/pages/landlords/edit"))

// Contracts
const AllContracts = lazy(() => import("./views/pages/contracts/all"))
const CreateNewContract = lazy(() => import("./views/pages/contracts/create"))
const EditContract = lazy(() => import("./views/pages/contracts/edit"))

// Lease Orders
const AllLeaseOrders = lazy(() => import("./views/pages/lease-orders/all"))

// Invoices
const AllInvoices = lazy(() => import("./views/pages/invoices/index"))
const CreateNewInvoice = lazy(() => import("./views/pages/invoices/create"))
const ViewInvoice = lazy(() => import("./views/pages/invoices/view"))
const EditInvoice = lazy(() => import("./views/pages/invoices/edit"))

// Modules
const ChatPage = lazy(() => import("./views/pages/chat/Chat"))
const calendar = lazy(() => import("./views/pages/calendar/Calendar"))

// System
const PropertyTypes = lazy(() => import("./views/pages/property-types"))
const CreateNewPropertyType = lazy(() => import("./views/pages/property-types/create"))
const EditPropertyType = lazy(() => import("./views/pages/property-types/edit"))

const InvoiceTypes = lazy(() => import("./views/pages/invoice-types"))
const CreateNewInvoiceType = lazy(() => import("./views/pages/invoice-types/create"))
const EditInvoiceType = lazy(() => import("./views/pages/invoice-types/edit"))

const SettingsPage = lazy(() => import("./views/pages/settings"))

// Security
const login = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                  ? context.horizontalLayout
                  : context.VerticalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute exact path="/" component={Home} />
          <AppRoute path="/page2" component={Page2} />

          {/* Properties */}
          <AppRoute path="/properties/all" component={AllProperties} />
          <AppRoute path="/properties/leased" component={LeasedProperties} />
          <AppRoute path="/properties/empty" component={EmptyProperties} />
          <AppRoute path="/properties/create" component={CreateNewProperty} />
          <AppRoute path="/properties/edit" component={EditProperty} />

          {/* Countries */}
          <AppRoute exact path="/countries" component={AllCountries} />
          <AppRoute path="/countries/create" component={CreateNewCountry} />
          <AppRoute path="/countries/edit" component={EditCountry} />

          {/* Cities */}
          <AppRoute exact path="/cities" component={AllCities} />
          <AppRoute path="/cities/create" component={CreateNewCity} />
          <AppRoute path="/cities/edit" component={EditCity} />

          {/* Customers */}
          <AppRoute exact path="/customers" component={AllCustomers} />
          <AppRoute path="/customers/create" component={CreateNewCustomer} />
          <AppRoute path="/customers/edit" component={EditCustomer} />

          {/* Landlords */}
          <AppRoute exact path="/landlords" component={AllLandlords} />
          <AppRoute path="/landlords/create" component={CreateNewLandlord} />
          <AppRoute path="/landlords/edit" component={EditLandlord} />

          {/* Contracts */}
          <AppRoute exact path="/contracts" component={AllContracts} />
          <AppRoute path="/contracts/create" component={CreateNewContract} />
          <AppRoute path="/contracts/edit" component={EditContract} />

          {/* Lease Orders */}
          <AppRoute path="/lease-orders" component={AllLeaseOrders} />

          {/* Invoices */}
          <AppRoute exact path="/invoices" component={AllInvoices} />
          <AppRoute path="/invoices/create" component={CreateNewInvoice} />
          <AppRoute path="/invoices/edit" component={EditInvoice} />
          <AppRoute path="/invoices/:id" component={ViewInvoice} />

          {/* Modules */}
          <AppRoute exact path="/chat" component={ChatPage} />
          <AppRoute exact path="/calendar" component={calendar} />

          {/* System */}
          <AppRoute exact path="/property-types" component={PropertyTypes} />
          <AppRoute path="/property-types/create" component={CreateNewPropertyType} />
          <AppRoute path="/property-types/edit" component={EditPropertyType} />

          <AppRoute exact path="/invoice-types" component={InvoiceTypes} />
          <AppRoute path="/invoice-types/create" component={CreateNewInvoiceType} />
          <AppRoute path="/invoice-types/edit" component={EditInvoiceType} />

          <AppRoute path="/settings" component={SettingsPage} />

          {/* Security */}
          <AppRoute
            path="/pages/login"
            component={login}
            fullLayout
          />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
