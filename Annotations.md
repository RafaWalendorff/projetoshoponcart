### folders
```
[
    {
        id: "1",
        name: "Gato",
        pins: ["pin1", "pin2"]
    },
    {
        id: "2",
        name: "Cachorro",
        pins: ["pin1", "pin2", "pin3"]
    },
    {
        id: "3",
        name: "Banana",
        pins: ["pin1", "pin2"]
    }
]
```

### Estado global

```
{
    folders: [{}, {}],
    activePinId: "",
    mode: "savePin" | "createFolder",
    tupe: null
} 
```
abreModalPin() -> { folders: [], activePin: "123", modal: "savePin" }

clodeModal() -> { folders: [], activePin: null, modal: null }

SavePinInFolder("folder", "pin1") -> { folders: [ { id:"pi}]}