// Middleware para manejo global de errores
export const errorHandler = (err, req, res, next) => {
    console.error(err); 
    res.status(err.status || 500).json({
        status: "FAILED",
        message: err.message || "Error interno del servidor",
    });
};

