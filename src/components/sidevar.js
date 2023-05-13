
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';


const SidebarMenu = () => {
    const { collapseSidebar } = useProSidebar();
    const backgroundColor = "#304060";  
    const backgroundColorHover = "#0b5ed7";
  
    return (
      <div style={{ display:'flex', height:'100%', borderStyle:'none' }}>
        <Sidebar 
            width='300px'
            collapsedWidth='80px'
            breakPoint='sm'
            transitionDuration='0'
            closeOnClick='true'
            customBreakPoint='700px'
            backgroundColor={backgroundColor} 
        >
            <Menu menuItemStyles={{
                //Personaliza los elementos del menú según su gerarquía.
                button: ({ level, active, disabled }) => {
                    if (level === 0){
                        return { 
                            color:'#ffffff', 
                            fontSize:22, 
                            backgroundColor:backgroundColor, 
                            '&:hover': {
                                backgroundColor:backgroundColorHover
                            }
                        } 
                    }
                    if (level === 1){
                        return { 
                            color:'#ffffff', 
                            fontSize:20, 
                            backgroundColor:backgroundColor,
                            '&:hover': {
                                backgroundColor:backgroundColorHover
                            }
                        } 
                    }
                    if (level === 2){
                        return { 
                            color:'#aaaaaa', 
                            fontSize:18, 
                            backgroundColor:backgroundColor,
                            '&:hover': {
                                backgroundColor:backgroundColorHover
                            }
                        } 
                    }
                },
            }}>
            <SubMenu label="Para inversores">
              <SubMenu label="Elementos teóricos">
                <MenuItem >Blockchain</MenuItem>  
                <MenuItem >Tokens</MenuItem>
                <MenuItem >ICO</MenuItem>
                <MenuItem >NFT </MenuItem>
                <MenuItem >Bots</MenuItem>
              </SubMenu>          
              <SubMenu label="Para programadores">
                <MenuItem >Algoritmos</MenuItem>  
                <MenuItem >Contratos inteligentes</MenuItem>
                <MenuItem >Herramientas</MenuItem>
              </SubMenu>          
            </SubMenu>          
            <MenuItem >Bibliografía</MenuItem>
            <MenuItem >Créditos</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    );
}
  

export default SidebarMenu;