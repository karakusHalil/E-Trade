import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  OrderedListOutlined,
  ReloadOutlined,
  ShoppingOutlined,
  UserOutlined,
  PlusCircleOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./AdminLayout.css";

const { Header, Footer, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;
    if (path.includes("/categories/list")) return "Category List";
    if (path.includes("/categories/create")) return "Add Category";
    if (path.includes("/categories/update")) return "Update Category";
    if (path.includes("/products/list")) return "Product List";
    if (path.includes("/products/create")) return "Add Product";
    // if (path.includes("/products/update")) return "Update Product";
    if (path.includes("/users/list")) return "User List";
    if (path.includes("/users/create")) return "Add User";
    // if (path.includes("/users/update")) return "Update User";
    if (path.includes("/blogs/list")) return "Blog List";
    if (path.includes("/blogs/create")) return "Add Blog";
    if (path === "/admin") return "Dashboard";
    return "";
  };
  const selectedMenuKey = () => {
    const path = location.pathname;

    if (path.includes("/categories/list")) return "2-1";
    if (path.includes("/categories/create")) return "2-2";
    if (path.includes("/categories/update")) return "2-3";
    // if (path.includes("/categories/delete")) return "2-4";

    if (path.includes("/products/list")) return "3-1";
    if (path.includes("/products/create")) return "3-2";
    // if (path.includes("/products/update")) return "3-3";
    // if (path.includes("/products/delete")) return "3-4";

    if (path.includes("/users/list")) return "4-1";
    if (path.includes("/users/create")) return "4-2";
    // if (path.includes("/users/update")) return "4-3";
    // if (path.includes("/users/delete")) return "4-4";

    if (path.includes("/blogs/list")) return "5-1";
    if (path.includes("/blogs/create")) return "5-2";
    // if (path.includes("/blogs/update")) return "5-3";
    // if (path.includes("/blogs/delete")) return "5-4";

    if (path === "/admin") return "1"; // dashboard

    return "1";
  };

  const items = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      path: "/admin",
      onClick: () => {
        navigate("/admin");
      },
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Category",
      path: "/admin/categories",
      children: [
        {
          key: "2-1",
          icon: <OrderedListOutlined />,
          label: "Category List",
          path: "/admin/categories/list",
          onClick: () => {
            navigate("/admin/categories/list");
          },
        },
        {
          key: "2-2",
          icon: <PlusCircleOutlined />,
          label: "Category Add",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
        {
          key: "2-3",
          icon: <ReloadOutlined />,
          label: "Update Category",
          path: "/admin/categories/update",
          onClick: () => {
            navigate("/admin/categories/update");
          },
        },
        // {
        //   key: "2-4",
        //   icon: <MinusCircleOutlined />,
        //   label: "Delete Category",
        //   path: "/admin/categories/delete",
        //   onClick: () => {
        //     navigate("/admin/categories/delete");
        //   },
        // },
      ],
    },
    {
      key: "3",
      icon: <ShoppingOutlined />,
      label: "Product",
      path: "/admin/product",
      children: [
        {
          key: "3-1",
          icon: <OrderedListOutlined />,
          label: "Product List",
          path: "/admin/products/list",
          onClick: () => {
            navigate("/admin/products/list");
          },
        },
        {
          key: "3-2",
          icon: <PlusCircleOutlined />,
          label: "Product Add",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/products/create");
          },
        },
        // {
        //   key: "3-3",
        //   icon: <ReloadOutlined />,
        //   label: "Update Product",
        //   path: "/admin/products/update",
        //   onClick: () => {
        //     navigate("/admin/products/update");
        //   },
        // },
        // {
        //   key: "3-4",
        //   icon: <MinusCircleOutlined />,
        //   label: "Delete Product",
        //   path: "/admin/products/delete",
        //   onClick: () => {
        //     navigate("/admin/products/delete");
        //   },
        // },
      ],
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "User",
      path: "/admin/user",
      children: [
        {
          key: "4-1",
          icon: <OrderedListOutlined />,
          label: "User List",
          path: "/admin/users/list",
          onClick: () => {
            navigate("/admin/users/list");
          },
        },
        {
          key: "4-2",
          icon: <PlusCircleOutlined />,
          label: "User Add",
          path: "/admin/users/create",
          onClick: () => {
            navigate("/admin/users/create");
          },
        },
        // {
        //   key: "4-3",
        //   icon: <ReloadOutlined />,
        //   label: "Update User",
        //   path: "/admin/users/update",
        //   onClick: () => {
        //     navigate("/admin/users/update");
        //   },
        // },
        // {
        //   key: "4-4",
        //   icon: <MinusCircleOutlined />,
        //   label: "Delete User",
        //   path: "/admin/users/delete",
        //   onClick: () => {
        //     navigate("/admin/users/delete");
        //   },
        // },
      ],
    },
    {
      key: "5",
      icon: <ReadOutlined />,
      label: "Blog",
      path: "/admin/blog",
      children: [
        {
          key: "4-1",
          icon: <OrderedListOutlined />,
          label: "Blog List",
          path: "/admin/blogs/list",
          onClick: () => {
            navigate("/admin/blogs/list");
          },
        },
        {
          key: "4-2",
          icon: <PlusCircleOutlined />,
          label: "Blog Add",
          path: "/admin/blogs/create",
          onClick: () => {
            navigate("/admin/blogs/create");
          },
        },
      ],
    },
  ];
  console.log(selectedMenuKey);
  return (
    <>
      <div className="admin-layout">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider width="20%">
            <Menu
              selectedKeys={[selectedMenuKey()]}
              defaultOpenKeys={["1"]}
              mode="inline"
              theme="dark"
              // inlineCollapsed={collapsed}
              items={items}
            />
          </Sider>
          <Layout>
            <Header>{getTitle()}</Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default AdminLayout;

AdminLayout.propTypes = {
  children: PropTypes.node,
};
