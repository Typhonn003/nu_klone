import "./style.css";
import { Button } from "../../Button/Default";
import { Label } from "../../Input/Label";
import { SelectInput } from "../../Input/Select";
import { Option } from "../../Input/Option";
import { TextInput } from "../../Input/Text";
import { NumberInput } from "../../Input/Number";
import { useState } from "react";

export function Form({ addData }) {

  const [dataDescription, setDataDescription] = useState("");
  const [dataValue, setDataValue] = useState("");
  const [dataType, setDataType] = useState("entry");

  function handleSubmit(event) {
    
    event.preventDefault();

    const newData = {
      description: dataDescription,
      value: Number(dataValue),
      type: dataType,
    };
    addData(newData);
  }

  return (
    <form className="finance_form" onSubmit={handleSubmit}>
      <div className="form_top">
        <Label htmlFor="description">Descrição</Label>
        <TextInput
          id="description"
          placeholder="Digite aqui sua descrição"
          value={dataDescription}
          onChange={(event) => setDataDescription(event.target.value)}
        />
        <p>Ex: Compra de roupas</p>
      </div>

      <div className="form_bottom">
        <div className="form_bottom_left">
          <Label htmlFor="value">Valor</Label>
          <NumberInput
            id="value"
            placeholder="Digite o valor"
            onChange={(event) => setDataValue(event.target.value)}
          />
        </div>

        <div className="form_bottom_right">
          <Label htmlFor="value-type">Tipo de valor</Label>
          <SelectInput
            id="value-type"
            onChange={(event) => setDataType(event.target.value)}
          >
            <Option value="entry">Entrada</Option>
            <Option value="expense">Despesa</Option>
          </SelectInput>
        </div>
      </div>
      <Button className="pink_btn" type="submit">
        Inserir valor
      </Button>
    </form>
  );
}
