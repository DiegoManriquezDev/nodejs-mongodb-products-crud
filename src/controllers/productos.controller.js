import Producto from "../models/Producto";

export const renderProductos = async (req, res) => {
  const productos = await Producto.find().lean();
  res.render("index", { productos: productos });
};

export const agregarProducto = async (req, res) => {
  try {
    const producto = Producto(req.body);
    await producto.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderEdit = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id).lean();

    res.render("edit", { producto: producto });
  } catch (error) {
    console.log(error.message);
  }
};

export const editarProducto = async (req, res) => {
  const { id } = req.params;
  await Producto.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  await Producto.findByIdAndDelete(id);
  res.redirect("/");
};
