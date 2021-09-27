const deviceModel = require('../models').equipos;

exports.getActivated = async (req, res, next) => {
    console.log(req.body)
    var { deviceSerie, hwSerie } = req.body;
    let device = await deviceModel.getDevice(deviceSerie, hwSerie);
    if(!device){
        res.status(500).json({ Success:false, message: 'Dispositivo no existe' });
        next();
    }else{
        if(device.activated == 0){
            res.status(500).json({ Success:false, message: 'Dispositivo no Activado' });
            next();
        }else{
            res.status(200).json({ Success: true, deviceData: device });
        }
    }
}

exports.registerDevice = async(req, res, next) => {
    var { deviceSerie, hwSerie, macSerie, alias } = req.body;
    let device = await deviceModel.getDevicePerHwSerie(hwSerie, macSerie);
    console.log(device);
    if(device){
        res.status(500).json({ Success: false, message: 'Este dispositivo ya se encuentra registrado' });
        next();
    }else{
        let resp = await deviceModel.registerDevice(deviceSerie, hwSerie, macSerie, alias);
        if(resp){
            res.status(200).json({ Success: true, message: 'Dispositivo Registrado en server correctamente' });
        }else{
            res.status(500).json({ Success: false, message: 'Ha ocurrido un error al registrar el dispositivo.' });
        }
    }

}