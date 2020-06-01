<template>
  <div class="hello">
    <v-form direction="horizontal">
      <v-form-item label="姓名" >
        <v-input placeholder="请输入姓名" type="text" v-model="newPerson.name" />
      </v-form-item>
      <v-form-item label="年龄">
        <v-input type="text" v-model="newPerson.age" />
      </v-form-item>
      <v-form-item label="您的性别">
        <v-radio-group v-model="newPerson.sex" :data="[{value: '男', text: '男'},{value: '女', text: '女'}]"></v-radio-group>
      </v-form-item>
      <v-button @click="createPerson">添加</v-button>
    </v-form>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person,index) in people" :key="index">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.sex }}</td>
          <td :class="'text-center'">
            <v-button @click="deletePerson(person,index)">Delete</v-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {
        newPerson: {
          name: '未知',
          age: '0',
          sex: '男'
        },
        people: [{
          name: 'Jack',
          age: 30,
          sex: '男'
        }, {
          name: 'Bill',
          age: 26,
          sex: '男'
        }, {
          name: 'Tracy',
          age: 22,
          sex: '女'
        }, {
          name: 'Chris',
          age: 36,
          sex: '男'
        }]
      }
    },
    methods: {
      createPerson: function() {
        this.people.push(this.newPerson);
        // 添加完newPerson对象后，重置newPerson对象
        this.newPerson = {
          name: '未知',
          age: 0,
          sex: '男'
        }
      },
      deletePerson: function(person, index) {
        // 删一个数组元素
        console.log(person, index)
        this.people.splice(index, 1);
      }
    }
  }
</script>
