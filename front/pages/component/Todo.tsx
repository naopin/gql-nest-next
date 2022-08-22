import React, { Component, Fragment, useState } from "react";
import { Delete, Build } from "@material-ui/icons";
import { Grid, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";


const Todo: React.FC = () => {
   

    const [state, setState] = useState(false)

    const styles = {
        Icon: {
          marginLeft: "auto"
        },
        Paper: {
          margin: "auto",
          padding: 10,
          display: "flex",
          alignItems: "center",
          marginTop: 10,
          width: 500
        }
      };

      const gridClass = state ? "fade-out" : "";
    return (
        <Grid
        xs={12}
        className={`${gridClass}`}
      >
        <Paper elevation={2} style={styles.Paper}>
          {/* <span style={styles.Todo}>a</span> */}
          <span>aassss</span>
          <IconButton
            color="primary"
            aria-label="Edit"
            style={styles.Icon}
            // onClick={() => this.props.updateTodo(this.props.index)}
          >
            <Build fontSize="small" />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="Delete"
            // onClick={this.deleteTodo}
          >
            <Delete fontSize="small" />
          </IconButton>
        </Paper>
      </Grid>
    );
}

export default Todo;