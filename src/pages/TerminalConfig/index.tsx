import React, { useState } from 'react';

import './style.css';
import HeaderMenu from '../../components/HeaderMenu';
import { Grid, Divider, Typography, Box, Chip } from '@mui/material';
import { Add, ArrowDropDown, ArrowRight, CorporateFare, FiberManualRecord } from '@mui/icons-material';
import { terminalConfigData } from '../../utils/data';
import { TreeItem, TreeView } from '@mui/lab';

export interface Props {
  children?: React.ReactNode;
  [name: string]: any;
}

interface Terminal {
  name: string;
  isActive: boolean;
}

interface Store {
  name: string;
  terminals: Terminal[];
}

interface Organization {
  name: string;
  stores: Store[];
}

interface TreeViewProps {
  data: Organization[];
}

const TerminalConfiguration: React.FC<Props> = ({ name }: Props) => {
  const handleStoreAddClick = () => {
    // TODO: Implement adding a store
    console.log('click');
  };

  const handleTerminalAddClick = () => {
    // TODO: Implement adding a terminal
    console.log('click');
  };

  const renderTree = (nodes: Organization[]) => {
    return nodes.map((node) => (
      <TreeItem key={node.name} nodeId={node.name} label={node.name} icon={<CorporateFare style={{ color: '#4770a8', margin: '0.3rem 0' }} />}>
        <Chip label='Add Store' icon={<Add />} onClick={handleStoreAddClick} className='terminal_config_add_button' />
        {node.stores.map((store) => (
          <TreeItem key={store.name} nodeId={store.name} label={store.name}>
            <Chip label='Add Terminal' icon={<Add />} onClick={handleTerminalAddClick} className='terminal_config_add_button' />
            {store.terminals.map((terminal) => {
              const renderTerminalIcon = (status: boolean) => {
                if (status) {
                  return <FiberManualRecord style={{ color: 'green' }} />;
                } else {
                  return <FiberManualRecord style={{ color: 'red' }} />;
                }
              };
              return (
                <TreeItem
                  key={terminal.name}
                  nodeId={terminal.name}
                  label={terminal.name}
                  icon={renderTerminalIcon(terminal.isActive)}
                  style={{ margin: '0.3rem 0' }}
                />
              );
            })}
          </TreeItem>
        ))}
      </TreeItem>
    ));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <HeaderMenu></HeaderMenu>
      <Grid container spacing={1} style={{ flexGrow: 1 }}>
        <Grid item xs={2.5}>
          <Box className='terminal_config_tree_container'>
            <Typography variant='h5' style={{ margin: '0.3rem 0.2rem 0.5rem' }}>
              Terminal Configuration
            </Typography>
            <Divider></Divider>
            <TreeView
              defaultCollapseIcon={<ArrowDropDown style={{ color: '#4976b3' }} />}
              defaultExpandIcon={<ArrowRight style={{ color: '#4976b3' }} />}
              className='terminal_config_root'
              style={{ margin: '0.5rem 0' }}>
              {renderTree(terminalConfigData)}
            </TreeView>
          </Box>
        </Grid>
        <Grid item xs={9.5}>
          <h2>Container</h2>
        </Grid>
      </Grid>
    </div>
  );
};

export default TerminalConfiguration;
