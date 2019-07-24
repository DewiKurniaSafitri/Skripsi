import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Equipment from '@/components/Equipment'
import EquipmentList from '@/components/EquipmentList'
import Failure from '@/components/Failure'
import FailureList from '@/components/FailureList'
import Repair from '@/components/Repair'
import RepairList from '@/components/RepairList'
import Downtime from '@/components/Downtime'
import Frequency from '@/components/Frequency'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Equipment',
      name: 'Equipment',
      component: Equipment
    },
    {
      path: '/EquipmentList',
      name: 'EquipmentList',
      component: EquipmentList
    },
    {
      path: '/Failure',
      name: 'Failure',
      component: Failure
    },
    {
      path: '/FailureList',
      name: 'FailureList',
      component: FailureList
    },
    {
      path: '/Repair',
      name: 'Repair',
      component: Repair
    },
    {
      path: '/RepairList',
      name: 'RepairList',
      component: RepairList
    },
    {
      path: '/Downtime',
      name: 'Downtime',
      component: Downtime
    },
    {
      path: '/Frequency',
      name: 'Frequency',
      component: Frequency
    }

  ]
})
