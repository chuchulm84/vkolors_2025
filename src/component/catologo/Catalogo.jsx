import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import { PinturaImpermeabilizanteScreen } from "./screenPinturas/PinturaImpermeabilizanteScreen";
import { ClaseAScreen } from "./screenPinturas/ClaseAScreen";
import { ClaseBScreen } from "./screenPinturas/ClaseBScreen";
import { Satinado } from "./screenPinturas/SatinadoScreen";
import { Inicio } from "./screenPinturas/Inicio";
import { PinturaEsmalte } from "./screenPinturas/PinturaEsmalte";
import IconoWhatsapp from "../whatsapp/iconoWhatsapp";
import { Primervk10 } from "./screenPinturas/Primer-vk10";
import { PastaProfesional } from "./screenPinturas/PastaProfesional";
import { FondoHerreria } from "./screenPinturas/FondoHerreria";
import { NavBar } from "../Navabar/NavBar";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2"];

export const Catalogo = () => {
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>
      <div className='rowCatalogo'>
        <div className='col '>
          <div className='columna1'>
            <Menu mode='inline' openKeys={openKeys} onOpenChange={onOpenChange}>
              <Menu.Item key='0' className='volver'>
                <Link to='/' className='volver'>
                  Inicio
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="1"><Link to="/catalogo/inicio">Inicio</Link></Menu.Item> */}

              <SubMenu key='sub1' title='Productos' id='pinturas'>
                <Menu.Item key='1'>
                  <Link to='/catalogo/claseA'>Pintura caucho mate clase A</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                  <Link to='/catalogo/claseB'>Pintura caucho mate clase B</Link>
                </Menu.Item>
                <Menu.Item key='3'>
                  <Link to='/catalogo/satinado'>
                    Pintura semi brillante satinado clase A
                  </Link>
                </Menu.Item>
                <Menu.Item key='4'>
                  <Link to='/catalogo/impermeabilizanteScreen'>
                    Pintura Impermeabilizante clase A
                  </Link>
                </Menu.Item>
                <Menu.Item key='5'>
                  <Link to='/catalogo/esmalte'>
                    Pintura Alquidica Esmalte, brillante clase A
                  </Link>
                </Menu.Item>
                {/*  */}
                <Menu.Item key='7'>
                  <Link to='/catalogo/primervk10'>Primer VK-10</Link>
                </Menu.Item>
                <Menu.Item key='8'>
                  <Link to='/catalogo/fondoherreria'>
                    Fondo Herreria anticorrosivo
                  </Link>
                </Menu.Item>
                <Menu.Item key='9'>
                  <Link to='/catalogo/pastaprofesional'>Pasta profesional</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>

        <div className='col-2 '>
          <IconoWhatsapp />
          <Switch>
            <Route path='/catalogo/inicio' component={Inicio} />
            <Route
              path='/catalogo/impermeabilizanteScreen'
              component={PinturaImpermeabilizanteScreen}
            />
            <Route path='/catalogo/claseA' component={ClaseAScreen} />
            <Route path='/catalogo/claseB' component={ClaseBScreen} />
            <Route path='/catalogo/satinado' component={Satinado} />
            <Route path='/catalogo/esmalte' component={PinturaEsmalte} />
            <Route path='/catalogo/esmalte/mate' component={PinturaEsmalte} />
            <Route path='/catalogo/primervk10' component={Primervk10} />
            <Route path='/catalogo/fondoherreria' component={FondoHerreria} />
            <Route
              path='/catalogo/pastaprofesional'
              component={PastaProfesional}
            />
          </Switch>
        </div>
      </div>
    </>
  );
};
