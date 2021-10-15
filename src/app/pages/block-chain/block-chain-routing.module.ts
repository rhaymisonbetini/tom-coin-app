import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockChainPage } from './block-chain.page';

const routes: Routes = [
  {
    path: '',
    component: BlockChainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockChainPageRoutingModule {}
