<template>
  <div class="form-edit-character">
    <form>
      <button type="button" class="btn-close" @click="triggerCloseForm">
        X
      </button>
      <h2><span>Editando o personagem:</span> {{ editingCharacter.name }}</h2>
      <fieldset>
        <legend>Pesquisar personagem</legend>
        <input
          type="text"
          name="name"
          required
          v-model="editingCharacter.name"
        />
      </fieldset>
      <fieldset v-if="editingCharacter.description">
        <legend>Descrição do personagem</legend>
        <textarea
          name="description"
          cols="30"
          rows="3"
          required
          v-model="editingCharacter.description"
        />
      </fieldset>
      <button type="button" class="btn-save" @click="triggerSaveEdit">
        Salvar Edição
      </button>
      <div v-if="alertMessage.message" class="message">
        {{ alertMessage.message }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormEditCharacter',
  props: {
    character: {
      type: Object,
      default() {},
      required: true
    }
  },
  data: function() {
    return {
      editingCharacter: { ...this.character },
      alertMessage: {
        type: '',
        message: ''
      }
    }
  },
  methods: {
    triggerCloseForm() {
      this.$emit('toggleDisplayForm')
    },
    triggerSaveEdit() {
      const nameDBLocalStorage = 'marvelApi'
      const localStorageMarvelApi = localStorage.getItem(nameDBLocalStorage)

      if (localStorage.getItem(nameDBLocalStorage)) {
        const dataLocalStorage = JSON.parse(localStorageMarvelApi)
        const hasValue = dataLocalStorage.find(
          item => item.id === this.editingCharacter.id
        )
        if (hasValue && !!Object.keys(hasValue).length) {
          this.alertMessage = {
            type: 'error',
            message: 'Personagem já está salvo!'
          }
          return
        }
        localStorage.setItem(
          nameDBLocalStorage,
          JSON.stringify([...dataLocalStorage, this.editingCharacter])
        )
      } else {
        localStorage.setItem(
          nameDBLocalStorage,
          JSON.stringify([this.editingCharacter])
        )
      }
      this.alertMessage = {
        type: 'success',
        message: 'Personagem salvo com sucesso!'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-edit-character {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0;
  background: #00000060;
  h2 {
    font-size: 18px;
    margin: 0px;
    width: 100%;
    text-transform: uppercase;
    margin-bottom: 20px;
    span {
      font-size: 16px;
      color: #5d5d5d;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 50%;
    height: auto;
    top: 40px;
    padding: 40px 40px 20px;
    border-radius: 30px;
    background: #ccc;
    font-size: 12px;
    fieldset {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 30px;
      legend {
        color: #5d5d5d;
        padding: 0px 20px;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
    input {
      display: block;
      width: 100%;
      padding: 10px;
      color: #000;
      background-color: transparent;
      background-clip: padding-box;
      border: transparent;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      margin-bottom: 10px;
    }
    textarea {
      display: block;
      width: 100%;
      padding: 10px;
      color: #000;
      background-color: transparent;
      background-clip: padding-box;
      border: transparent;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      margin-bottom: 10px;
    }
  }
  .btn-close {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 70%;
    padding: 10px 15px;
    border: none;
    outline: none;
  }
  .btn-save {
    cursor: pointer;
    width: 100%;
    background: #fff;
    padding: 14px;
    color: #111;
    border-radius: 4px;
    display: inline-block;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .message {
    width: 100%;
    text-align: center;
    color: #721c24;
    background-color: #dff8d7;
    padding: 20px;
    margin: 20px;
    border: 1px solid transparent;
    border-radius: 10px;
  }
}
</style>
